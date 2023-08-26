import { Link, Outlet } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <div
        id="wm-ipp-base"
        lang="en"
        style={{ display: "none", direction: "ltr" }}
      >
        <div
          id="wm-ipp"
          style={{ position: "fixed", left: "0", top: "0", right: "0" }}
        >
          <div id="wm-ipp-inside">
            <div style={{ position: "relative" }}>
              <div
                id="wm-logo"
                style={{ float: "left", width: "110px", "padding-top": "12px" }}
              >
                <a href="/web/" title="Wayback Machine home page">
                  <img
                    src="/_static/images/toolbar/wayback-toolbar-logo-200.png"
                    srcSet="/_static/images/toolbar/wayback-toolbar-logo-100.png, /_static/images/toolbar/wayback-toolbar-logo-150.png 1.5x, /_static/images/toolbar/wayback-toolbar-logo-200.png 2x"
                    alt="Wayback Machine"
                    style={{ width: "100px" }}
                    border={0}
                  />
                </a>
              </div>
              <div className="r" style={{ float: "right" }}>
                <div
                  id="wm-btns"
                  style={{
                    "-webkit-text-align": "right",
                    "text-align": "right",
                    height: "25px",
                  }}
                >
                  <div id="wm-save-snapshot-success">success</div>
                  <div id="wm-save-snapshot-fail">fail</div>
                  <a
                    id="wm-save-snapshot-open"
                    href="#"
                    title="Share via My Web Archive"
                  >
                    <span className="iconochive-web" />
                  </a>
                  <a
                    href="https://archive.org/account/login.php"
                    title="Sign In"
                    id="wm-sign-in"
                  >
                    <span className="iconochive-person" />
                  </a>
                  <span
                    id="wm-save-snapshot-in-progress"
                    className="iconochive-web"
                  />
                  <a
                    href="http://faq.web.archive.org/"
                    title="Get some help using the Wayback Machine"
                    style={{ top: "-6px" }}
                  >
                    <span
                      className="iconochive-question"
                      style={{ color: "rgb(87,186,244)", "font-size": "160%" }}
                    />
                  </a>
                  <a
                    id="wm-tb-close"
                    href="#close"
                    onclick="__wm.h(event);return false;"
                    style={{ top: "-2px" }}
                    title="Close the toolbar"
                  >
                    <span
                      className="iconochive-remove-circle"
                      style={{ color: "#888888", "font-size": "240%" }}
                    />
                  </a>
                </div>
                <div id="wm-share">
                  <a
                    href="/web/20191227155605/http://web.archive.org/screenshot/http://www.dietbvn.org/home.php"
                    id="wm-screenshot"
                    title="screenshot"
                  >
                    <span className="wm-icon-screen-shot" />
                  </a>
                  <a href="#" id="wm-video" title="video">
                    <span className="iconochive-movies" />
                  </a>
                  <a
                    id="wm-share-facebook"
                    href="#"
                    data-url="http://web.archive.org/web/20191227155605/http://www.dietbvn.org:80/home.php"
                    title="Share on Facebook"
                    style={{ "margin-right": "5px" }}
                    target="_blank"
                  >
                    <span
                      className="iconochive-facebook"
                      style={{ color: "#3b5998", "font-size": "160%" }}
                    />
                  </a>
                  <a
                    id="wm-share-twitter"
                    href="#"
                    data-url="http://web.archive.org/web/20191227155605/http://www.dietbvn.org:80/home.php"
                    title="Share on Twitter"
                    style={{ "margin-right": "5px" }}
                    target="_blank"
                  >
                    <span
                      className="iconochive-twitter"
                      style={{ color: "#1dcaff", "font-size": "160%" }}
                    />
                  </a>
                </div>
              </div>
              <table className="c" style={{}}>
                <tbody>
                  <tr>
                    <td className="u" colSpan={2}>
                      <form
                        target="_top"
                        method="get"
                        action="/web/submit"
                        name="wmtb"
                        id="wmtb"
                      >
                        <input
                          type="text"
                          name="url"
                          id="wmtbURL"
                          defaultValue="http://www.dietbvn.org/home.php"
                          onfocus="this.focus();this.select();"
                        />
                        <input
                          type="hidden"
                          name="type"
                          defaultValue="replay"
                        />
                        <input
                          type="hidden"
                          name="date"
                          defaultValue={20191227155605}
                        />
                        <input type="submit" defaultValue="Go" />
                      </form>
                    </td>
                    <td className="n" rowSpan={2} style={{ width: "110px" }}>
                      <table>
                        <tbody>
                          {/* NEXT/PREV MONTH NAV AND MONTH INDICATOR */}
                          <tr className="m">
                            <td className="b" nowrap="nowrap">
                              <a
                                href="http://web.archive.org/web/20191127080048/http://www.dietbvn.org:80/home.php"
                                title="27 Nov 2019"
                              >
                                <strong>Nov</strong>
                              </a>
                            </td>
                            <td
                              className="c"
                              id="displayMonthEl"
                              title="You are here: 15:56:05 Dec 27, 2019"
                            >
                              DEC
                            </td>
                            <td className="f" nowrap="nowrap">
                              <a
                                href="http://web.archive.org/web/20200203211227/http://dietbvn.org:80/home.php"
                                title="03 Feb 2020"
                              >
                                <strong>Feb</strong>
                              </a>
                            </td>
                          </tr>
                          {/* NEXT/PREV CAPTURE NAV AND DAY OF MONTH INDICATOR */}
                          <tr className="d">
                            <td className="b" nowrap="nowrap">
                              <a
                                href="http://web.archive.org/web/20191202063755/http://dietbvn.org:80/home.php"
                                title="06:37:55 Dec 02, 2019"
                              >
                                <img
                                  src="/_static/images/toolbar/wm_tb_prv_on.png"
                                  alt="Previous capture"
                                  width={14}
                                  height={16}
                                  border={0}
                                />
                              </a>
                            </td>
                            <td
                              className="c"
                              id="displayDayEl"
                              style={{
                                width: "34px",
                                "font-size": "24px",
                                "white-space": "nowrap",
                              }}
                              title="You are here: 15:56:05 Dec 27, 2019"
                            >
                              27
                            </td>
                            <td className="f" nowrap="nowrap">
                              <a
                                href="http://web.archive.org/web/20200106224900/http://www.dietbvn.org:80/home.php"
                                title="22:49:00 Jan 06, 2020"
                              >
                                <img
                                  src="/_static/images/toolbar/wm_tb_nxt_on.png"
                                  alt="Next capture"
                                  width={14}
                                  height={16}
                                  border={0}
                                />
                              </a>
                            </td>
                          </tr>
                          {/* NEXT/PREV YEAR NAV AND YEAR INDICATOR */}
                          <tr className="y">
                            <td className="b" nowrap="nowrap">
                              <a
                                href="http://web.archive.org/web/20180823042525/http://www.dietbvn.org:80/home.php"
                                title="23 Aug 2018"
                              >
                                <strong>2018</strong>
                              </a>
                            </td>
                            <td
                              className="c"
                              id="displayYearEl"
                              title="You are here: 15:56:05 Dec 27, 2019"
                            >
                              2019
                            </td>
                            <td className="f" nowrap="nowrap">
                              <a
                                href="http://web.archive.org/web/20210117025945/http://dietbvn.org/home.php"
                                title="17 Jan 2021"
                              >
                                <strong>2021</strong>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="s">
                      <div id="wm-nav-captures">
                        <a
                          className="t"
                          href="/web/20191227155605*/http://www.dietbvn.org/home.php"
                          title="See a list of every capture for this URL"
                        >
                          61 captures
                        </a>
                        <div
                          className="r"
                          title="Timespan for captures of this URL"
                        >
                          07 Apr 2012 - 17 Jan 2021
                        </div>
                      </div>
                    </td>
                    <td className="k">
                      <a href id="wm-graph-anchor">
                        <div
                          id="wm-ipp-sparkline"
                          title="Explore captures for this URL"
                          style={{ position: "relative" }}
                        >
                          <canvas
                            id="wm-sparkline-canvas"
                            width={650}
                            height={27}
                            border={0}
                          />
                        </div>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "2px",
                  "-webkit-text-align": "right",
                  "text-align": "right",
                }}
              >
                <a
                  id="wm-expand"
                  className="wm-btn wm-closed"
                  href="#expand"
                  onclick="__wm.ex(event);return false;"
                >
                  <span id="wm-expand-icon" className="iconochive-down-solid" />{" "}
                  <span style={{ "font-size": "80%" }}>About this capture</span>
                </a>
              </div>
            </div>
            <div
              id="wm-capinfo"
              style={{
                "border-top": "1px solid #777",
                display: "none",
                overflow: "hidden",
              }}
            >
              <div id="wm-capinfo-collected-by">
                <div
                  style={{
                    "background-color": "#666",
                    color: "#fff",
                    "font-weight": "bold",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                  }}
                >
                  COLLECTED BY
                </div>
                <div
                  style={{ padding: "3px", position: "relative" }}
                  id="wm-collected-by-content"
                >
                  <div
                    style={{
                      display: "inline-block",
                      "vertical-align": "top",
                      width: "50%",
                    }}
                  >
                    <span
                      className="c-logo"
                      style={{
                        "background-image":
                          "url(https://archive.org/services/img/alexacrawls)",
                      }}
                    />
                    Organization:{" "}
                    <a
                      style={{ color: "#33f" }}
                      href="https://archive.org/details/alexacrawls"
                      target="_new"
                    >
                      <span className="wm-title">Alexa Crawls</span>
                    </a>
                    <div
                      style={{
                        "max-height": "75px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "75px",
                          background:
                            "linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 90%,rgba(255,255,255,255) 100%)",
                        }}
                      />
                      Starting in 1996,{" "}
                      <a href="http://www.alexa.com/">Alexa Internet</a> has
                      been donating their crawl data to the Internet Archive.
                      Flowing in every day, these data are added to the{" "}
                      <a href="http://web.archive.org/">Wayback Machine</a>{" "}
                      after an embargo period.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      "vertical-align": "top",
                      width: "49%",
                    }}
                  >
                    <span className="c-logo" style={{}} />
                    <div>
                      Collection:{" "}
                      <a
                        style={{ color: "#33f" }}
                        href="https://archive.org/details/alexacrawls"
                        target="_new"
                      >
                        <span className="wm-title">Alexa Crawls</span>
                      </a>
                    </div>
                    <div
                      style={{
                        "max-height": "75px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "75px",
                          background:
                            "linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 90%,rgba(255,255,255,255) 100%)",
                        }}
                      />
                      Starting in 1996,{" "}
                      <a href="http://www.alexa.com/">Alexa Internet</a> has
                      been donating their crawl data to the Internet Archive.
                      Flowing in every day, these data are added to the{" "}
                      <a href="http://web.archive.org/">Wayback Machine</a>{" "}
                      after an embargo period.
                    </div>
                  </div>
                </div>
              </div>
              <div id="wm-capinfo-timestamps">
                <div
                  style={{
                    "background-color": "#666",
                    color: "#fff",
                    "font-weight": "bold",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                  }}
                  title="Timestamps for the elements of this page"
                >
                  TIMESTAMPS
                </div>
                <div>
                  <div
                    id="wm-capresources"
                    style={{
                      margin: "0 5px 5px 5px",
                      "max-height": "250px",
                      "overflow-y": "scroll !important",
                    }}
                  />
                  <div
                    id="wm-capresources-loading"
                    style={{
                      "-webkit-text-align": "left",
                      "text-align": "left",
                      margin: "0 20px 5px 5px",
                      display: "none",
                    }}
                  >
                    <img src="/_static/images/loading.gif" alt="loading" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="wm-ipp-print">The Wayback Machine - home.php</div>
      <div id="donato" style={{ position: "relative", width: "100%" }}>
        <div id="donato-base">
          <iframe
            id="donato-if"
            src="https://archive.org/includes/donate.php?as_page=1&platform=wb&referer=http%3A//web.archive.org/web/20191227155605/http%3A//www.dietbvn.org/home.php"
            scrolling="no"
            frameBorder={0}
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>

      {/* END WAYBACK TOOLBAR INSERT */}
      <div id="header">
        <div id="menu">
          <ul>
            <li>
              <a href="index.php">Home</a>
            </li>
            <li>
              <a href="#">DIET-Details</a>
            </li>
            <li>
              <a href="read-more-news.php">News</a>
            </li>
            <li>
              <a href="contactus.php">Contact us</a>
            </li>
          </ul>
        </div>
        
        <div id="logo">
          <img
            id="banner1"
            src="banner.jpg"
            className="shadow-lg"
            width="850px"
            height="250px"
          />
        </div>
      </div>

      {/* Main */}
      <div id="page" className="container-fluid">
        <div id="content" className="row">
          <div className="col-8">
            <Outlet />
          </div>

          <div id="sidebar1" className="col-4">
            <ul>
              <li className="shadow ">
                <h2>DIET Links</h2>
                <ul>
                  <li>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Home"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Objective">Objective</Link>
                  </li>
                  <li>
                    <Link to="/function">Organization's Function</Link>
                  </li>
                  <li>
                    <Link to="/district">District profile</Link>
                  </li>
                  <li>
                    <Link to="/support">Support System</Link>
                  </li>
                  <li>
                    <Link to="/branches">Branches</Link>
                  </li>
                  <li>
                    <Link to="/hr">Human Resources</Link>
                  </li>
                  <li>
                    <Link to="/faculty">Staff</Link>
                  </li>
                  {/*<li><a href="video.php">Video Gallary</a></li>*/}
                  <li>
                    <Link to="photo-gallary.php">Photo Gallary/Video Gallery</Link>
                  </li>
                  <li>
                    <Link to="download.php">Download</Link>
                  </li>
                  <li>
                    <Link to="result.php">Result</Link>
                  </li>
                  <li>
                    <Link to="research.php">Research</Link>
                  </li>
                  <li>
                    <Link to="training-program.php">Tranning Program</Link>
                  </li>
                  <li>
                    <Link to="website-link.php">Link/Resource</Link>
                  </li>
                  <li>
                    <Link to="rti.php">Right to Information Act</Link>
                  </li>
                  <li>
                    <Link to="download/bed_addmission.pdf"
                      className="blink-text"
                    >
                      B.Ed. Admission Program
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <h1>News</h1>
          <br />
          <p>
            દિવ્યાંગ ઉમેદવારો અને એક્સ આર્મીમેન તેમજ શહીદના સંતાનોએ તારીખ :
            15/6/23 ના રોજ તમામ ઉમેદવારોએ બપોરે 12 કલાકે ઉપસ્થિત રહેવું.
          </p>

          {/* <!-- <div style={{ clear: "both" }}>&nbsp;</div> --> */}
          <div className="hr1">&nbsp;</div>
          <div id="sidebar">
            <ul>
              <li>
                <h2>Thought of Day</h2>
                <ul>
                  <li>
                    <br />{" "}
                    <a>
                      One of the most beautiful things we can do is to help one
                      another. Kindness doesn't cost a thing.
                    </a>{" "}
                  </li>
                </ul>
              </li>
            </ul>
            {/* <!-- <div style={{ clear: "both" }}>&nbsp;</div> --> */}
          </div>
        </div>
      </div>

      <div id="footer">
        <p align="center">
          Copyright © 2012 Diet Bhavnagar. All Rights Reserved. <br />
          Site Visit Count :- 25797
        </p>
        <p id="developer">
          <b>
            Developed By :-{" "}
            <a href="https://www.google.co.in/maps/place/The+Easy+Learn+Academy/@21.7540749,72.1415403,17z/data=!3m1!4b1!4m5!3m4!1s0x395f5a70ae66c5d9:0x79e1b3139eda8f90!8m2!3d21.7541453!4d72.1434957">
              The Easy Learn Academy
            </a>
          </b>
          <a href="https://www.google.co.in/maps/place/The+Easy+Learn+Academy/@21.7540749,72.1415403,17z/data=!3m1!4b1!4m5!3m4!1s0x395f5a70ae66c5d9:0x79e1b3139eda8f90!8m2!3d21.7541453!4d72.1434957"></a>
        </p>
      </div>
    </div>
  );
};
export default Menu;
