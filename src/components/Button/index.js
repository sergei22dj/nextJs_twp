import React from "react";
import { Text, Wrapper } from "./views";
import Link from "next/link";

const Button = ({ text, href, variant2 }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <Wrapper>
            <Text>{text}</Text>
          </Wrapper>
        </Link>
      ) : (
        <Wrapper variant2={variant2}>
          <Text>{text}</Text>
        </Wrapper>
      )}
    </>
  );
};
export default Button;
