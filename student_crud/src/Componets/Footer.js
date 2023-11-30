import React from "react";
import "./Footer.css";

const Footer = () => {
    const footerStyle = {
        padding: "20px",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        textDecoration: "none",
        color: "white",
    };
    return (
        <div>
            <>
                <div>
                    {/* Footer */}
                    {/* ------------------------------------------------------------------Footer.css Class is used----------------------------------------------------------*/}
                    <footer className="footerBackgroud">
                        {/* ------------------------------------------------------------------Style Variable----------------------------------------------------------------*/}
                        <div style={footerStyle}>
                            © 2023 Copyright:{" "}
                            <a
                                className="textWhite"
                                href="/"
                                // -------------------------------------------------------------inline Style----------------------------------------------------------------
                                style={{ textDecoration: "none" }}
                            >
                                Amar Infotech@gmail.com
                            </a>
                        </div>
                        {/* Copyright */}
                    </footer>
                    {/* Footer */}
                </div>
            </>
        </div>
    );
};

export default Footer;
