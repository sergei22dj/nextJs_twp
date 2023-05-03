import React, { useState } from "react";
import { Icon, IconsContainer, Logo, Wrapper } from "./views";
import Link from "next/link";
import Menu from "../menu";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Wrapper>
      {menuVisible && <Menu setMenuVisible={setMenuVisible} />}

      <Icon
        src={menuVisible ? "/images/Menu_Close.svg" : "/images/Menu_Icon.svg"}
        onClick={() => setMenuVisible(!menuVisible)}
      />
      <Link href="/">
        <Logo src="/images/Logo.png" />
      </Link>

      <IconsContainer>
        <Icon src="/images/Search_Icon.svg" />
        <Link href={"/forum"}>
          <Icon src="/images/Forum_Icon.svg" />
        </Link>
      </IconsContainer>
    </Wrapper>
  );
};
export default Header;
