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
            <Html>
                <Head>
                    <title>Коммерческое предложение ООО "Мейстер"</title>
                    <link rel="stylesheet" href={currentSiteUrl + "email-assets/meister-email-fonts.css"}/>
                </Head>
                <Body style={{fontFamily: "ProximaNova, Tahoma, Arial, sans-serif", fontWeight: 300, width: "600px", maxWidth: "600px", minWidth: "600px", margin: "0 auto", backgroundColor: "white"}}>
                    <Container style={{paddingTop: "15px"}}>
                        <Row>
                            <Column style={{width: "33.3333%", maxWidth: "33.3333%", paddingLeft: "7", paddingRight: "7"}}>
                                <Link href={`tel:${currentPhone}`} style={{fontWeight: 600, textDecoration: "none", color: "black", display: "inline", width: "100%", textAlign: "center"}}>
                                    <Img
                                        src={`${baseUrl}/static/phone.svg`}
                                        alt="картинка телефона"
                                        style={{display: "inline", verticalAlign: "middle", marginRight: "5px"}}
                                        width="16"
                                        height="16"
                                    />

                                    {currentPhoneBeautified}
                                </Link>
                            </Column>
                            <Column style={{width: "33.3333%", maxWidth: "33.3333%", paddingLeft: "7", paddingRight: "7"}}>
                                <Link href={currentSiteUrl} style={{width: "100%", display: "inline", textAlign: "center"}}>
                                    <Img
                                        src={`../../static/logo.png`}
                                        width="163"
                                        height="56"
                                        alt="Логотип ООО 'Мейстер'"
                                        style={{display: "inline"}}
                                    />
                                </Link>
                            </Column>
                            <Column style={{width: "33.3333%", maxWidth: "33.3333%", paddingLeft: "7", paddingRight: "7"}}>
                                <Link href={`mailto:${currentEmail}`} style={{fontWeight: 600, textDecoration: "none", color: "black", display: "inline", width: "100%", textAlign: "center"}}>
                                    {currentEmail}
                                    <Img
                                        src={`${baseUrl}/static/mail.svg`}
                                        width="16"
                                        height="16"
                                        style={{display: "inline", verticalAlign: "middle", marginLeft: "5px"}}
                                        alt="картинка телефона"
                                    />
                                </Link>
                            </Column>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Column style={{textAlign: "center"}}>
                                <Img
                                    src={`${baseUrl}/static/main-photo.png`}
                                    width="640"
                                    height="341"
                                    style={{display: "inline", verticalAlign: "middle", maxWidth: "100%", height: "auto"}}
                                    alt="картинка телефона"
                                />
                            </Column>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Column style={{backgroundImage: `url(${baseUrl}/static/partners-bg.png)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", paddingTop: "10px", paddingBottom: "40px"}}>
                                <Text style={{fontSize: "24px", fontWeight: 700, textAlign: "center", marginBottom: "20px", padding: 0}}>Грузоперевозки без проблем по антикризисным расценкам</Text>
                                <Text style={{fontSize: "16px", lineHeight: "22px", textAlign: "left", padding: 0, margin: 0, marginBottom: "5px"}}>Вашему предприятию не нужно тратить время и силы на то, чтобы организовать доставку груза в любую точку страны. Обратитесь в нашу компанию и доверьте свою заботу профессионалам.</Text>
                                <Text style={{fontSize: "16px", lineHeight: "22px", textAlign: "left", padding: 0, margin: 0,}}>Компания «Мейстер» функционирует на отечественном рынке с 2016 года. Мы успешно доставили более 150 млн. тонн различных грузов во все города нашей страны. МЫ полностью обеспечим сохранность вашего груза и его своевременную доставку.</Text>
                            </Column>
                        </Row>
                    </Container>
                    <Section style={{backgroundColor: "#a95033", paddingTop: "40px", paddingBottom: "40px"}}>
                        <Container>
                            <Row>
                                <Column style={{width: "100%"}}>
                                    <Text style={{color: "white", marginBottom: "35px", marginTop: 0, textAlign: "center", padding: 0, fontSize: "24px", fontWeight: 700}}>Обратившись к нам, вы получаете:</Text>
                                </Column>
                            </Row>
                        </Container>
                        <Container style={{marginBottom: "30px"}}>
                            <Row>
                                <Column style={{textAlign: "center", width: "33.3333%", paddingLeft: "7px", paddingRight: "7px", height: "1px"}}>
                                    <div style={{height: "100%", verticalAlign: "top"}}>
                                        <div style={{height: "55px"}}>
                                            <Img
                                                src={`${baseUrl}/static/phone.png`}
                                                width="65"
                                                height="341"
                                                style={{display: "inline", varticalAlign: "middle", maxWidth: "100%", height: "auto"}}
                                                alt="картинка телефона"
                                            />
                                        </div>
                                        <Text style={{color: "white", fontSize: "14px", lineHeight: "14px", paddingBottom: 0, marginBottom: 0, marginTop: "15px"}}>Перевозка груза от 1 центнера до 20 тонн</Text>
                                    </div>
                                </Column>
                                <Column style={{textAlign: "center", width: "33.3333%", paddingLeft: "7px", paddingRight: "7px", height: "1px"}}>
                                    <div style={{height: "100%", verticalAlign: "top"}}>
                                        <div style={{height: "55px"}}>
                                            <Img
                                                src={`${baseUrl}/static/Communication.png`}
                                                width="61"
                                                style={{display: "inline", varticalAlign: "middle", maxWidth: "100%", height: "auto"}}
                                                alt="картинка телефона"
                                            />
                                        </div>
                                        <Text style={{color: "white", fontSize: "14px", lineHeight: "14px", paddingBottom: 0, marginBottom: 0, marginTop: "15px"}}>Отслеживание перемещения груза</Text>
                                    </div>
                                </Column>
                                <Column style={{textAlign: "center", width: "33.3333%", paddingLeft: "7px", paddingRight: "7px", height: "1px"}}>
                                    <div style={{height: "100%", verticalAlign: "top"}}>
                                        <div style={{height: "55px"}}>
                                            <Img
                                                src={`${baseUrl}/static/weight.png`}
                                                width="76"
                                                style={{display: "inline", varticalAlign: "middle", maxWidth: "100%", height: "auto"}}
                                                alt="картинка телефона"
                                            />
                                        </div>
                                        <Text style={{color: "white", fontSize: "14px", lineHeight: "14px", paddingBottom: 0, marginBottom: 0, marginTop: "15px"}}>Доставка груза в обозначенный срок</Text>
                                    </div>
                                </Column>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Column style={{width: "100%"}}>
                                    <Text style={{color: "white", marginTop: "15px", marginBottom: 0, textAlign: "center", padding: 0, fontSize: "20px", fontWeight: 700}}>Цены, которые радуют каждого</Text>
                                </Column>
                            </Row>
                        </Container>
                    </Section>
                    <Section style={{backgroundImage: `url(${baseUrl}/static/our-partners-bg.png)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", paddingTop: "40px", paddingBottom: "40px"}}>
                        <Container>
                            <Row>
                                <Column>
                                    <Text style={{marginBottom: "35px", marginTop: 0, textAlign: "center", padding: 0, fontSize: "24px", fontWeight: 700}}>
                                        С Нами сотрудничают
                                    </Text>
                                </Column>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Column style={{width: "33.3333%", textAlign: "center", height: "1px"}}>
                                    <Link href="http://seyma.ru/" target="_blank" style={{fontWeight: 400, color: "black", display: "inline-block", height: "100%"}}>
                                        <div style={{height: "70px", lineHeight: "70px", paddingLeft: "15px", paddingRight: "15px", marginBottom: "10px"}}>
                                            <Img
                                                src={`${baseUrl}/static/seyma.png`}
                                                width="55"
                                                style={{display: "inline", verticalAlign: "middle", maxWidth: "100%", height: "auto", maxHeight: "100%"}}
                                                alt="картинка телефона"
                                            />
                                        </div>
                                        <Text style={{fontSize: "14px", liыneHeight: "14px", padding: 0, margin: 0}}>
                                            Агрофирма птицефабрика Сеймовская
                                        </Text>
                                    </Link>
                                </Column>
                                <Column style={{width: "33.3333%", textAlign: "center", height: "1px"}}>
                                    <Link href="https://gormanu.ru/" target="_blank" style={{fontWeight: 400, color: "black", display: "inline-block", height: "100%"}}>
                                        <div style={{height: "70px", lineHeight: "70px", paddingLeft: "15px", paddingRight: "15px", marginBottom: "10px"}}>
                                            <Img
                                                src={`${baseUrl}/static/gorohovec.svg`}
                                                width="110"
                                                style={{display: "inline", verticalAlign: "middle", maxWidth: "100%", height: "auto", maxHeight: "100%"}}
                                                alt="картинка телефона"
                                            />
                                        </div>
                                        <Text style={{fontSize: "14px", lineHeight: "14px", padding: 0, margin: 0}}>
                                            Гороховецкая мануфактура
                                        </Text>
                                    </Link>
                                </Column>
                                <Column style={{width: "33.3333%", textAlign: "center", height: "1px"}}>
                                    <Link href="http://www.biskotti.ru/" target="_blank" style={{fontWeight: 400, color: "black", display: "inline-block", height: "100%"}}>
                                        <div style={{height: "70px", lineHeight: "70px", paddingLeft: "15px", paddingRight: "15px", marginBottom: "10px"}}>
                                            <Img
                                                src={`${baseUrl}/static/biskotti.png`}
                                                width="130"
                                                style={{display: "inline", verticalAlign: "middle", maxWidth: "100%", height: "auto", maxHeight: "100%"}}
                                                alt="картинка телефона"
                                            />
                                        </div>
                                        <Text style={{fontSize: "14px", lineHeight: "14px", padding: 0, margin: 0}}>
                                            ООО "БИСКОТТИ ПЛЮС"
                                        </Text>
                                    </Link>
                                </Column>
                            </Row>
                        </Container>
                    </Section>
                    <Section style={{paddingTop: "40px", paddingBottom: "40px", backgroundImage: `url(${baseUrl}/static/partners-bg.png)`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                        <Container>
                            <Row>
                                <Column>
                                    <Text style={{marginBottom: "35px", marginTop: 0, textAlign: "center", padding: 0, fontSize: "24px", fontWeight: 700}}>
                                        Отзывы наших партнеров говорят сами за себя
                                    </Text>
                                </Column>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Column>
                                    <div style={{marginBottom: "15px"}}>
                                        <Img
                                            src={`${baseUrl}/static/quote.png`}
                                            width="20"
                                            height="14"
                                            style={{display: "inline", marginRight: "3px"}}
                                        />
                                        <Text style={{fontSize: "16px", lineHeight: "18px", display: "inline"}}>
                                            Отличный перевозчик, профессионал своего дела. БЫСТРЫЙ. Четкий контроль погрузочно-разгрузочных работ. Информативность и добросовестность. Успеха вам и процветания! Рекомендую!
                                        </Text>
                                    </div>
                                    <div style={{marginBottom: "15px"}}>
                                        <Img
                                            src={`${baseUrl}/static/quote.png`}
                                            width="20"
                                            height="14"
                                            style={{display: "inline-block", marginRight: "3px"}}
                                        />
                                        <Text style={{fontSize: "16px", lineHeight: "18px", display: "inline"}}>
                                            Замечательный, ответственный перевозчик! Оперативность, качество, приятное общение, порядочность — всё это вызывает уважение! Спасибо за профессиональный подход к делу. Желаем процветания и успехов!
                                        </Text>
                                    </div>
                                    <div>
                                        <Img
                                            src={`${baseUrl}/static/quote.png`}
                                            width="20"
                                            height="14"
                                            style={{display: "inline-block", marginRight: "3px"}}
                                        />
                                        <Text style={{fontSize: "16px", lineHeight: "18px", display: "inline"}}>
                                            Порядочный перевозчик. Доставка груза осуществляется без задержек и нареканий. Всем остался доволен, побольше бы таких перевозчиков. Надеюсь на дальнейшее сотрудничество!!!
                                        </Text>
                                    </div>
                                </Column>
                            </Row>
                        </Container>
                    </Section>

                    <Section style={{width: "100%", height: "3px", backgroundColor: "#a4c9cd"}}></Section>

                    <Section style={{paddingTop: "30px", paddingBottom: "50px", backgroundImage: `url(${baseUrl}/static/footer-bg.png)`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                        <Container style={{marginBottom: "30px"}}>
                            <Row>
                                <Column style={{marginBottom: "30px"}}>
                                    <Link href={currentSiteUrl} style={{width: "100%", textAlign: "center", display: "inline-block"}}>
                                        <Img
                                            src={`${baseUrl}/static/logo-gray.png`}
                                            width="117"
                                            height="31"
                                            style={{display: "inline"}}
                                        />
                                    </Link>
                                </Column>
                            </Row>
                        </Container>
                        <Container style={{marginBottom: "25px"}}>
                            <Row>
                                <Column style={{marginBottom: "30px"}}>
                                    <Text style={{fontSize: "16px", width: "100%", textAlign: "center", marginTop: 0, marginBottom: 0}}>
                                        С уважением, команда ООО «Мейстер»
                                    </Text>
                                </Column>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Column>
                                    <Link href={`tel:${currentPhone}`} style={{fontWeight: 600, display: "inline-block", textAlign: "center", color: "black", width: "100%", marginBottom: "5px"}}>
                                        <Img
                                            src={`${baseUrl}/static/phone.svg`}
                                            alt="картинка телефона"
                                            style={{display: "inline", verticalAlign: "middle", marginRight: "7px"}}
                                            width="16"
                                            height="16"
                                        />
                                        {currentPhoneBeautified}
                                    </Link>
                                    <Link href={`mailto:${currentEmail}`} style={{fontWeight: 400, textDecoration: "none", color: "black", display: "inline-block", width: "100%", textAlign: "center"}}>
                                        {currentEmail}
                                        <Img
                                            src={`${baseUrl}/static/mail.svg`}
                                            width="16"
                                            height="16"
                                            style={{display: "inline", verticalAlign: "middle", marginLeft: "7px"}}
                                            alt="картинка телефона"
                                        />
                                    </Link>
                                </Column>
                            </Row>
                        </Container>
                    </Section>
                </Body>
            </Html>
    );
}