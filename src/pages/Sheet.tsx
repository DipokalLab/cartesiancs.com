/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import TopNavBar from "../components/TopNavbar";
import Footer from "../components/Footer";

const Card = ({ title, value }) => (
  <div
    css={css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid rgb(36, 36, 43)",
      padding: "1rem",
      borderRadius: "8px",
      flex: "1 1 30%",
      margin: "0.5rem",
      backgroundColor: "#0d0e0f",
      boxSizing: "border-box",
      minWidth: "250px",
    })}
  >
    <h3 css={css({ color: "#e6e6eb", marginBottom: "0.5rem" })}>{title}</h3>
    <p css={css({ color: "#bfbfc7" })}>{value}</p>
  </div>
);

// Sample shareholder data
const shareholderData = [
  { name: "Hyeong Jun Huh", tokens: 5000, percentage: "100%" },
];

export function Sheet() {
  return (
    <>
      <div
        css={css({
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        })}
      >
        <TopNavBar />

        <div
          css={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "100px 1rem 1rem 1rem",
            boxSizing: "border-box",
            maxWidth: "1200px",
          })}
        >
          <div
            css={css({
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "stretch",
              width: "100%",
              maxWidth: "1200px",
              flexWrap: "wrap",
            })}
          >
            <Card title="Token" value="CARTESIAN" />
            <Card title="Token Supply" value="5,000" />
            <Card title="Value Per Share" value="-" />
          </div>

          <div
            css={css({
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "stretch",
              width: "100%",
              maxWidth: "1200px",
              flexWrap: "wrap",
              marginTop: "1.5rem",
            })}
          >
            <div
              css={css({
                backgroundColor: "#0d0e0f",
                border: "1px solid rgb(36, 36, 43)",
                borderRadius: "8px",
                overflow: "hidden",
                width: "100%",
                margin: "0.5rem",
                flex: "1 1 100%",
              })}
            >
              <table
                css={css({
                  width: "100%",
                  borderCollapse: "collapse",
                })}
              >
                <thead>
                  <tr
                    css={css({
                      backgroundColor: "#1a1b1f",
                      borderBottom: "1px solid rgb(36, 36, 43)",
                    })}
                  >
                    <th
                      css={css({
                        color: "#e6e6eb",
                        padding: "1rem",
                        textAlign: "left",
                      })}
                    >
                      Shareholder
                    </th>
                    <th
                      css={css({
                        color: "#e6e6eb",
                        padding: "1rem",
                        textAlign: "right",
                      })}
                    >
                      Tokens Held
                    </th>
                    <th
                      css={css({
                        color: "#e6e6eb",
                        padding: "1rem",
                        textAlign: "right",
                      })}
                    >
                      Ownership %
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shareholderData.map((shareholder, index) => (
                    <tr
                      key={index}
                      css={css({
                        borderBottom:
                          index < shareholderData.length - 1
                            ? "1px solid rgb(36, 36, 43)"
                            : "none",
                      })}
                    >
                      <td
                        css={css({
                          color: "#e6e6eb",
                          padding: "0.75rem 1rem",
                          textAlign: "left",
                        })}
                      >
                        {shareholder.name}
                      </td>
                      <td
                        css={css({
                          color: "#bfbfc7",
                          padding: "0.75rem 1rem",
                          textAlign: "right",
                        })}
                      >
                        {shareholder.tokens.toLocaleString()}
                      </td>
                      <td
                        css={css({
                          color: "#bfbfc7",
                          padding: "0.75rem 1rem",
                          textAlign: "right",
                        })}
                      >
                        {shareholder.percentage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            css={css({
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "stretch",
              width: "100%",
              maxWidth: "1200px",
              flexWrap: "wrap",
              marginTop: "1rem",
              marginBottom: "2rem",
            })}
          >
            <div
              css={css({
                backgroundColor: "#0d0e0f",
                border: "1px solid rgb(36, 36, 43)",
                borderRadius: "8px",
                padding: "1.5rem",
                margin: "0.5rem",
                flex: "1 1 100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <div
                css={css({
                  display: "flex",
                  gap: "2.5rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                })}
              >
                <a
                  href="https://app.realms.today/dao/9pqo1ZaBwmMwvFABsf9vw92tXXpXCbkrRDprKcgziEpT"
                  target="_blank"
                  rel="noopener noreferrer"
                  css={css({
                    color: "#e6e6eb",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ffffff",
                    },
                    "&:hover svg": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  })}
                >
                  View DAO
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    css={css({
                      marginLeft: "0.25rem",
                      opacity: 0,
                      transform: "translateX(-5px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    })}
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://solscan.io/token/bbvDVJZ6BE1845dGREWUbyT52XNC8qQiXLmUqAvkL4K"
                  target="_blank"
                  rel="noopener noreferrer"
                  css={css({
                    color: "#e6e6eb",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ffffff",
                    },
                    "&:hover svg": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  })}
                >
                  View Token
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    css={css({
                      marginLeft: "0.25rem",
                      opacity: 0,
                      transform: "translateX(-5px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    })}
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
