import {Container, Row, Img, Column, Button, Html, Body, Head, Link} from "@react-email/components";
import * as React from "react";


const currentPhone = "+79991205982";
const currentName = "Николай";
const currentEmail = "nickolasdzr@yandex.ru";
const currentSiteUrl = "https://tk-meister.ru/"

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

export default function Email() {
    return (
        <Html>
            <Head>
                <title>Коммерческое предложение ООО "Мейстер"</title>
            </Head>
            <Body style={main}>
                <Container>
                    <Row>
                        <Column>
                            <Link href={`tel:${currentPhone}`} style={linkReset}>
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
                        <Column>
                            <Link href={currentSiteUrl}>
                                <Img
                                    src={`../../static/logo.png`}
                                    width="163"
                                    height="56"
                                    alt="Логотип ООО 'Мейстер'"
                                />
                            </Link>
                        </Column>
                        <Column>
                            <Link href={`mailto:${currentEmail}`} style={linkReset}>
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

const main = {
    backgroundColor: "white",
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
}