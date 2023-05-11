import React, { useState } from "react";
import {
  FormWrapper,
  InputLog,
  InputWrapper,
  InputsWrapper,
  Tab,
  TabsContainer,
  Text,
  Title,
} from "../../styles/pagestyles/login/views";
import Button from "@/components/Button";
import axios from "axios";
import { loginUser } from "../../../helpers";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [submitError, setSubmitError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [validatorsError, setValidatorsError] = useState([]);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.push("/main");
  }

  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // Validatiors ===
  const validateData = () => {
    const err = [];

    if (data.email?.length < 4) {
      err.push("e-mail Должен быть длинее 4 символов");
    } else if (data.email?.length > 30) {
      err.push("e-mail должен быть короче 30 символов");
    } else if (!regEmail.test(data.email)) {
      err.push("Некорректный e-mail");
    } else if (data.password?.length < 6) {
      err.push("Пароль должен содержать более 6 символов");
    }

    setValidatorsError(err);

    if (err.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  // === Validators

  const handleOnchange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async () => {
    if (validateData()) {
      setLoading(true);
      try {
        const apiRes = await axios.post(
          "http://localhost:3000/api/auth/signup",
          data
        );

        if (apiRes?.data?.success) {
          // save data in session using next auth

          const loginRes = await loginUser({
            email: data.email,
            password: data.password,
          });

          if (loginRes && !loginRes.ok) {
            setSubmitError("");
          } else {
            setActiveTab(0);
          }
        }
      } catch (error) {}
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (validateData()) {
      setLoading(true);
      try {
        const loginRes = await loginUser({
          email: data.email,
          password: data.password,
        });

        if (loginRes && !loginRes.ok) {
          setSubmitError("");
        } else {
          router.push("/main");
        }
      } catch (error) {}
      setLoading(false);
    }
  };
  console.log(regEmail.test(data.email));
  return (
    <>
      <FormWrapper variant={activeTab === 2}>
        <TabsContainer>
          <Tab
            active={activeTab === 0 || activeTab === 2}
            onClick={() => setActiveTab(0)}
          >
            Войти на сайт
          </Tab>
          <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
            Регистрация
          </Tab>
        </TabsContainer>

        <Title>
          {activeTab === 0
            ? "Укажите данные для входа на сайт"
            : activeTab === 1
            ? "Укажите данные для регистрации на сайте"
            : "Восстановление пароля"}
        </Title>

        <InputsWrapper>
          <InputLog
            placeholder="Телефон или электронная почта"
            name="email"
            value={data.email}
            onChange={(e) => handleOnchange(e)}
          />

          {activeTab !== 2 && (
            <InputLog
              placeholder="Пароль"
              name="password"
              value={data.password}
              onChange={(e) => handleOnchange(e)}
            />
          )}
          {validatorsError.map((el) => (
            <>{el}</>
          ))}
          <div
            onClick={
              activeTab === 0
                ? () => handleLogin()
                : activeTab === 1
                ? () => handleSignup()
                : null
            }
          >
            <Button
              text={
                activeTab === 0
                  ? "Войти"
                  : activeTab === 1
                  ? "Зарегистрироваться"
                  : "Восстановить"
              }
              variant2={loading}
            />
          </div>
          {activeTab === 0 && (
            <div onClick={() => setActiveTab(2)}>
              <Button variant2={true} text={"Восстановить пароль"} />
            </div>
          )}
        </InputsWrapper>

        {activeTab !== 2 && (
          <Text>
            Авторизуясь на сайте, Вы принимаете условия Пользовательского
            соглашения, Политики конфиденциальности и подтверждаете согласие на
            передачу и обработку своих данных
          </Text>
        )}
      </FormWrapper>
    </>
  );
};
export default Login;
