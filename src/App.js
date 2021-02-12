import React, { Suspense } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { IntlProvider, FormattedMessage } from 'react-intl';

import Messages from './i18n/messages';

const RegisterProductView = React.lazy(() => import('./views/register_product_view'));
const ProductListView = React.lazy(() => import('./views/product_list_view'));


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myList: [],
      currentLang: localStorage.getItem('lang') || 'pt'
    }

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add() {
    this.setState(state => ({
      myList: [...state.myList, { id: Date.now() }]
    }))
  }

  remove() {
    const myList = this.state.myList;
    if (myList.length) {
      myList.splice(0, 1);
      this.setState({ myList });
    }
  }

  setLanguage(language) {
    localStorage.setItem('lang', language);
    this.setState({
      currentLang: language
    });
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <IntlProvider locale={state.currentLang} messages={Messages[state.currentLang]}>
          <Router>
            <div>
              <header>
                <ul className="link-list">
                  <li>
                    <Link to={'/'}>
                      <FormattedMessage defaultMessage="New" id="menu.new" />
                    </Link>
                  </li>
                  <li>
                    <Link to={'/list'}>
                      <FormattedMessage defaultMessage="List" id="menu.list" />
                    </Link>
                  </li>
                </ul>
                <ul className="lang-list">
                  <li>
                    <button onClick={this.setLanguage.bind(this, 'pt')}>Portugês</button>
                  </li>
                  <li>
                    <button onClick={this.setLanguage.bind(this, 'en')}>English</button>
                  </li>
                </ul>
              </header>
              <div>
                {/* <ClickCounter /> */}
                <Suspense fallback={<div>Loading...</div>}>
                  <Route path="/" exact component={props => <RegisterProductView {...props} />} />
                  <Route path="/list" component={props => <ProductListView {...props} />} />
                </Suspense>
              </div>
            </div>
          </Router>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
