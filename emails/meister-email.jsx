import {
    Container,
    Row,
    Img,
    Column,
    Button,
    Html,
    Body,
    Head,
    Link,
    Text,
    Tailwind,
    Section
} from "@react-email/components";
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
            '10': '10px',
            '20': '20px',
        }
    }
}

const currentPhone = "+79991205982";
const currentPhoneBeautified = "+7 (999) 120 59 82"
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
                <Body className="bg-white font-light font-base" style={{width: "600px", maxWidth: "600px", minWidth: "600px", margin: "0 auto"}}>
                    <Container className="font-base bg-white font-light pt-5">
                        <Row>
                            <Column style={{...col4, paddingLeft: "7", paddingRight: "7"}}>
                                <Link href={`tel:${currentPhone}`} className="font-regular text-black inline">
                                    <Img
                                        src={`${baseUrl}/static/phone.svg`}
                                        alt="картинка телефона"
                                        className="inline align-top mr-7"
                                        width="16"
                                        height="16"
                                    />

                                    {currentPhoneBeautified}
                                </Link>
                            </Column>
                            <Column style={{...col4, paddingLeft: "7", paddingRight: "7"}}>
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
                            <Column style={{...col4, paddingLeft: "7", paddingRight: "7"}}>
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
                            <Column className="text-center">
                                <Img
                                    src={`${baseUrl}/static/main-photo.png`}
                                    width="640"
                                    height="341"
                                    className="inline align-middle max-w-full h-auto"
                                    alt="картинка телефона"
                                />
                            </Column>
                        </Row>
                    </Container>
                    <Container style={{paddingTop: "10px", paddingBottom: "40px"}}>
                        <Row>
                            <Column style={{backgroundImage: `url(${baseUrl}/static/partners-bg.png)`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                                <h1 className="text-2xl font-bold text-center p-0 m-0 mb-20" style={{fontSize: "25px"}}>Уважаемые партнеры!</h1>
                                <Text className="text-left p-0 m-0 mb-5" style={{fontSize: "16px", lineHeight: "22px"}}>Наша компания специализируется на перевозке грузов по всей России и её регионам. Нам доверяют клиенты, благодарят за качественную работу и обращаются снова и снова.</Text>
                                <Text className="text-left p-0 m-0" style={{fontSize: "16px", lineHeight: "22px"}}>Наша компания специализируется на перевозке грузов по всей России и её регионам. Нам доверяют клиенты, благодарят за качественную работу и обращаются снова и снова.</Text>
                            </Column>
                        </Row>
                    </Container>
                    <Section style={{backgroundColor: "#a95033", paddingTop: "40px", paddingBottom: "40px"}}>
                        <Container>
                            <Row>
                                <Column style={{width: "100%"}}>
                                    <h1 style={{color: "white", marginBottom: "30px", marginTop: 0, textAlign: "center", padding: 0}}>Мы даем 100% гарантию</h1>
                                </Column>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Column style={{textAlign: "center", width: "33.3333%", paddingLeft: "7px", paddingRight: "7px"}}>
                                    <div style={{height: "55px", verticalAlign: "top"}}>
                                        <Img
                                            src={`${baseUrl}/static/phone.png`}
                                            width="65"
                                            height="341"
                                            className="inline align-middle max-w-full h-auto"
                                            alt="картинка телефона"
                                        />
                                    </div>
                                    <Text style={{color: "white", fontSize: "14px", lineHeight: "14px", paddingBottom: 0, marginBottom: 0}}>Наш преоритет это сохранность и качество</Text>
                                </Column>
                                <Column style={{textAlign: "center", width: "33.3333%", paddingLeft: "7px", paddingRight: "7px"}}>
                                    <div style={{height: "55px", verticalAlign: "top"}}>
                                        <Img
                                            src={`${baseUrl}/static/weight.png`}
                                            width="76"
                                            className="inline align-middle max-w-full h-auto"
                                            alt="картинка телефона"
                                        />
                                    </div>
                                    <Text style={{color: "white", fontSize: "14px", lineHeight: "14px", paddingBottom: 0, marginBottom: 0}}>Доставка вашего груза точно в обозначенный договором срок</Text>
                                </Column>
                                <Column style={{textAlign: "center", width: "33.3333%", paddingLeft: "7px", paddingRight: "7px"}}>
                                    <div style={{height: "55px", verticalAlign: "top"}}>
                                        <Img
                                            src={`${baseUrl}/static/Communication.png`}
                                            width="61"
                                            className="inline align-middle max-w-full h-auto"
                                            alt="картинка телефона"
                                        />
                                    </div>
                                    <Text style={{color: "white", fontSize: "14px", lineHeight: "14px", paddingBottom: 0, marginBottom: 0}}>Сопровождение и информирование на всем пути грузоперевозки</Text>
                                </Column>
                            </Row>
                        </Container>
                    </Section>
                </Body>
            </Html>
        </Tailwind>);
}

const col4 = {
    width: "33.3333%",
    minWidth: "33.3333%",
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