import {Container, Row, Img, Column, Button, Html, Body, Head, Link, Text, Tailwind} from "@react-email/components";
import * as React from "react";

const tailwindSettings = {
    fontFamily: {
        base: 'ProximaNova, Tahoma, Arial, sans-serif'
    },
    fontWeight: {
        light: 300,
        regular: 400,
    },
    extend: {
        spacing: {
            '1': '1px',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '5': '5px',
            '6': '6px',
            '7': '7px',
            '8': '8px',
            '9': '9px',
            '10': '10px'
        }
    }
}

const currentPhone = "+79991205982";
const currentPhoneBeautyfied = "+7 (999) 120 59 82"
const currentName = "Николай";
const currentEmail = "nickolasdzr@yandex.ru";
const currentSiteUrl = "https://tk-meister.ru/"

const baseUrl = process.env.VERCEL_URL
    ? currentSiteUrl
    : "";

export default function Email() {
    return (
        <Tailwind config={{
            theme: tailwindSettings,
        }}>
            <Html>
                <Head>
                    <title>Коммерческое предложение ООО "Мейстер"</title>
                    <link rel="stylesheet" href={currentSiteUrl + "email-assets/meister-email-fonts.css"}/>
                </Head>
                <Body className="bg-white font-light font-base">
                    <Container className="font-base bg-white font-light pt-5">
                        <Row>
                            <Column style={col4}>
                                <Link href={`tel:${currentPhone}`} className="font-regular text-black inline">
                                    <Img
                                        src={`${baseUrl}/static/phone.svg`}
                                        alt="картинка телефона"
                                        className="inline align-top mr-7"
                                        width="16"
                                        height="16"
                                    />

                                    {currentPhoneBeautyfied}
                                </Link>
                            </Column>
                            <Column style={col4}>
                                <Link href={currentSiteUrl} style={linkLogo}>
                                    <Img
                                        src={`../../static/logo.png`}
                                        width="163"
                                        height="56"
                                        alt="Логотип ООО 'Мейстер'"
                                        style={mainLogo}
                                    />
                                </Link>
                            </Column>
                            <Column style={col4}>
                                <Link href={`mailto:${currentEmail}`} style={{...linkReset, ...linkTopEmail}}>
                                    {currentEmail}
                                    <Img
                                        src={`${baseUrl}/static/mail.svg`}
                                        width="16"
                                        height="16"
                                        className="inline align-middle ml-7"
                                        alt="картинка телефона"
                                    />
                                </Link>
                            </Column>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Column>
                                <Img
                                    src={`${baseUrl}/static/main-photo.png`}
                                    width="640"
                                    height="341"
                                    className="inline align-middle max-w-full"
                                    alt="картинка телефона"
                                />
                            </Column>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Column>
                                <Text className="text-2xl font-bold">Уважаемые партнеры!</Text>
                                <Text>Наша компания специализируется на перевозке грузов по всей России и её регионам. Нам доверяют клиенты, благодарят за качественную работу и обращаются снова и снова.</Text>
                                <Text>Наша компания специализируется на перевозке грузов по всей России и её регионам. Нам доверяют клиенты, благодарят за качественную работу и обращаются снова и снова.</Text>
                            </Column>
                        </Row>
                    </Container>
                </Body>
            </Html>
        </Tailwind>);
}

const col4 = {
    width: "33.3333%",
}

const main = {
    backgroundColor: "white",
    fontFamily: 'ProximaNova, Helvetica, Arial, sans-serif',
    fontWeight: 300,
}

const mainLogo = {
    display: "inline",
}

const linkLogo = {
    width: "100%",
    display: "inline-block",
    textAlign: "center",
}

const linkReset = {
    textDecoration: "none",
    color: "black",
    display: "inline-block",
}

const linkTopEmail = {
    width: "100%",
    textAlign: "right",
    fontWeight: 400,
}