import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPolicyShown: true,
      isSubscriptionShown: false,
      scrollValue: 20,
    };

    this.collapseNotification = this.collapseNotification.bind(this);
    this.collapseSubscription = this.collapseSubscription.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if (this.getCookie("subscriptionClosed") === "") {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  collapseNotification() {
    this.setState({ isPolicyShown: false });
  }

  collapseSubscription() {
    this.setState({ isSubscriptionShown: false });
    const now = new Date();
    now.setTime(now.getTime() + 10 * 60 * 1000);
    const expires = `expires=${now.toUTCString()};`;
    document.cookie = `subscriptionClosed=true; ${expires}`;
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll() {
    const limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
      document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
    const oneThird = (limit - window.innerHeight) / 3;
    if (window.scrollY > this.state.scrollValue && window.scrollY > oneThird) {
      this.setState({ isSubscriptionShown: true });
    }

    this.setState({ scrollValue: window.scrollY });
  }

  getCookie(name) {
    const cookieName = name + "=";
    const cookies = decodeURIComponent(document.cookie);
    const cookiesArray = cookies.split(";");
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }

  render() {
    return (
      <div className="App" onScroll={() => this.checkScrollLocation()}>
        <section className={this.state.isPolicyShown ? "notification" : "notification notification__closed"}>
          <div className="notification__content">
            <p className="notification__text">
              By accessing and using this website, you acknowledge that you have read and
              understand our <a href="cookie-policy">Cookie Policy</a>, <a href="privacy-policy">Privacy Policy</a>, and our <a href="tos">Terms of Service</a>.
            </p>
            <button onClick={() => this.collapseNotification()} className="btn btn--notification">Got it</button>
          </div>
        </section>
        <section className="hero">
          <div>
            <img className="logo" alt="Logo" src="../../../y-logo-white.png"></img>
          </div>
          <div className="hero__content">
            <h1 className="hero__content--header">
              Hello! I'm Kelvin Junilson
              <br />
              <span className="hero__content--subheader">Consult, Design, and Develop Websites</span>
            </h1>
            <p className="hero__content--content">
              Have something great in mind? Feel free to contact me.
              <br />
              I'll help you to make it happen.
            </p>
            <button className="btn btn--hero">LET'S MAKE CONTACT</button>
          </div>
        </section>
        <section className="feature">
          <div className="feature__text">
            <h1 className="feature__text--header">How Can I Help You?</h1>
            <p className="feature__text--subheader">
              Our work then targeted, best practices outcomes social innovation synergy.
              Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
              program areas scale.
            </p>
          </div>
          <div className="feature__grid">
            <div className="card">
              <div className="card__header">
                <h2 className="card__text card__text--title">Consult</h2>
                <FontAwesomeIcon icon="comments" />
              </div>
              <div className="card__content">
                <p className="text text--card">
                  Co-create, design thinking; strengthen infrastructure resist granular.
                  Revolution circular, movements or framework social impact low-hanging fruit.
                  Save the world compelling revolutionary progress.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card__header">
                <h2 className="card__text card__text--title">Design</h2>
                <FontAwesomeIcon icon="paint-brush" />
              </div>
              <div className="card__content">
                <p className="text text--card">
                  Policymaker collaborates collective impact humanitarian shared value
                  vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile
                  issue outcomes vibrant boots on the ground sustainable.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card__header">
                <h2 className="card__text card__text--title">Develop</h2>
                <FontAwesomeIcon icon="cubes" />
              </div>
              <div className="card__content">
                <p className="text text--card">
                  Revolutionary circular, movements a or impact framework social impact low-
                  hanging. Save the compelling revolutionary inspire progress. Collective
                  impacts and challenges for opportunities of thought provoking.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card__header">
                <h2 className="card__text card__text--title">Marketing</h2>
                <FontAwesomeIcon icon="bullhorn" />
              </div>
              <div className="card__content">
                <p className="text text--card">
                  Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                  replicable, effective altruism youth. Mobilize commitment to overcome
                  injustice resilient, uplift social transparent effective.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card__header">
                <h2 className="card__text card__text--title">Manage</h2>
                <FontAwesomeIcon icon="stream" />
              </div>
              <div className="card__content">
                <p className="text text--card">
                  Change-makers innovation or shared unit of analysis. Overcome injustice
                  outcomes strategize vibrant boots on the ground sustainable. Optimism,
                  effective altruism invest optimism corporate social.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card__header">
                <h2 className="card__text card__text--title">Evolve</h2>
                <FontAwesomeIcon icon="chart-line" />
              </div>
              <div className="card__content">
                <p className="text text--card">
                  Activate catalyze and impact contextualize humanitarian. Unit of analysis
                  overcome injustice storytelling altruism. Thought leadership mass
                  incarceration. Outcomes big data, fairness, social game-changer.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={this.state.isSubscriptionShown ? "subscription" : "subscription subscription__closed"}>
          <div className="subscription__container">
            <button className="subscription__close" onClick={() => this.collapseSubscription()}><FontAwesomeIcon icon="times" /></button>
            <h2 className="subscription__text subscription__text--header">Get latest updates in web technologies</h2>
            <p className="subscription__text">
              I write articles related to web technologies, such as design trends, development
              tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
              them all.
          </p>
            <form action="post" className="form">
              <input className="form__input" type="text" placeholder="Email address"></input>
              <button className="btn btn--subscription">Count me in!</button>
            </form>
          </div>
        </section>
        <footer className="footer">
          <p className="footer__text">© 2018 Kelvin Junilson. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
