import React from "react";
import { Button, Item, Items, Logo, Wrapper } from "./views";
import { data } from "./data";
import Link from "next/link";

const Footer = () => {
  return (
    <Wrapper>
      <Items>
        {data.map((el) => (
          <>
            <Link href={el.href}>
              <Item>{el.text}</Item>
            </Link>
          </>
        ))}
      </Items>
      <Link href="/">
        <Logo src="/images/Logo.png" />
      </Link>

      <Button src="/images/Btn_To_Top.svg" />
    </Wrapper>
  );
};
export default Footer;
