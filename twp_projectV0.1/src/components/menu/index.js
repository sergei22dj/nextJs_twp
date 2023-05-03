import React from "react";
import { Item, ItemsWrapper, Logo, Wrapper } from "./views";
import { data } from "../Footer/data";
import Link from "next/link";

const Menu = ({ setMenuVisible }) => {
  return (
    <Wrapper>
      <ItemsWrapper>
        {data.map((el) => (
          <>
            <Link href={el.href} onClick={() => setMenuVisible(false)}>
              <Item>{el.text}</Item>
            </Link>
          </>
        ))}
      </ItemsWrapper>
      <Logo src="/images/Menu_Logo.svg" />
    </Wrapper>
  );
};
export default Menu;
