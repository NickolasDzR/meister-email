import {Container, Row, Img, Column, Button, Html, Body, Head, Link} from "@react-email/components";
import * as React from "react";


const currentPhone = "+79991205982";
const currentName = "Николай";
const currentEmail = "nickolasdzr@yandex.ru";
const currentSiteUrl = "https://tk-meister.ru/"

const baseUrl = process.env.VERCEL_URL
    ? currentSiteUrl
    : "";

export default function Email() {
    return (
        <Html>
            <Head>
                <title>Коммерческое предложение ООО "Мейстер"</title>
                <link rel="stylesheet" href={currentSiteUrl + "email-assets/meister-email-fonts.css"}/>
            </Head>
            <Body style={main}>
                <Container>
                    <Row>
                        <Column style={col4}>
                            <Link href={`tel:${currentPhone}`} style={{...linkReset, ...linkTopPhone}}>
                                <Img
                                    src={`${baseUrl}/static/phone.svg`}
                                    alt="картинка телефона"
                                    style={topHeadPhoneSvg}
                                    width="16"
                                    height="16"
                                />
                                {currentPhone}
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
                                    alt="картинка телефона"
                                    style={topHeadEmailSvg}
                                />
                            </Link>
                        </Column>
                    </Row>
                </Container>
            </Body>
        </Html>
    );
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

const topHeadPhoneSvg = {
    display: "inline",
    verticalAlign: "top",
    marginRight: "7px"
}

const topHeadEmailSvg = {...topHeadPhoneSvg};

topHeadEmailSvg["marginRight"] = "0";
topHeadEmailSvg["marginLeft"] = "7px";
topHeadEmailSvg["verticalAlign"] = "bottom";

const linkReset = {
    textDecoration: "none",
    color: "black",
    display: "inline-block",
}

const linkTopPhone = {
    width: "100%",
    textAlign: "left",
    fontWeight: 400,
}

const linkTopEmail = {
    width: "100%",
    textAlign: "right",
}