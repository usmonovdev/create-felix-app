import React from "react";
import { Code, Container, Wrapper } from "./style.s";
import Button from "@/styled-components/buttons";
import Image from "next/image";
import Link from "next/link";
import { variables } from "@/constants/variables";

const WelcomeSection = () => {
  return (
    <Wrapper>
      <Container>
        <Image
          src={"/felix.png"}
          width={300}
          height={69}
          objectFit="cover"
          alt="felix logo"
          style={{ objectFit: "contain" }}
        />
        <code style={{ lineHeight: "1.5rem" }}>
          1. Ishni boshlashdan avval{" "}
          <Link
            href={"https://github.com/usmonovdev/create-felix-app"}
            style={{
              color: variables.blue_500,
              textDecorationLine: "underline",
            }}
          >
            github repo
          </Link>
          'ga star bosing
        </code>
        <code style={{ lineHeight: "1.5rem" }}>
          2. Star bosganingiz dan so'ng ushbu komponentni{" "}
          <Code>src/components/common/WelcomeSection</Code> faylini o'chirib
          tashlang
        </code>
        <Button style={{ width: "100%" }} variant="secondary-gray" size="2xl">
          Documentatsiya
        </Button>
      </Container>
    </Wrapper>
  );
};

export default WelcomeSection;
