import React, {useEffect, useState} from 'react';
import GameSelectionView from './views/GameSelectionView';
import PropTypes from 'prop-types';
import APP_UI_STATES from './AppUIStates';
import PlayerSetupView from './views/PlayerSetupView';
import GameView from './views/GameView';
import EnteringGameDisplay from './views/EnteringGameView';
import CashOutView from './views/CashOutView';
import LoadingView from './views/LoadingView';
import CreditsView from './views/CreditsView';
import {getPlayerWasGreeted as getPlayerWasGreetedSelector} from './redux/selectors';
import {useSelector} from 'react-redux';
import PlayerOptionsView from './views/PlayerOptionsView';

const Main = (props) => {
  const [viewToRender, setViewToRender] = useState(null);

  const playerWasGreeted = useSelector(getPlayerWasGreetedSelector);

  useEffect(() => {
    switch (props.appUIState) {
      case APP_UI_STATES.SPLASHSCREEN:
        setViewToRender(<LoadingView />);
        break;
      case APP_UI_STATES.GAME_SELECTION:
        setViewToRender(<GameSelectionView />);
        break;
      case APP_UI_STATES.PLAYER_SETUP:
        setViewToRender(<PlayerSetupView />);
        break;
      case APP_UI_STATES.PLAYER_OPTIONS:
        setViewToRender(<PlayerOptionsView />);
        break;
      case APP_UI_STATES.ENTERING_GAME:
        setViewToRender(<EnteringGameDisplay />);
        break;
      case APP_UI_STATES.IN_GAME:
        setViewToRender(<GameView />);
        break;
      case APP_UI_STATES.CASH_OUT:
        setViewToRender(<CashOutView />);
        break;
      case APP_UI_STATES.CREDITS:
        setViewToRender(<CreditsView />);
        break;
    }
  }, [props.appUIState]);

  return viewToRender;
};

Main.propTypes = {
  appUIState: PropTypes.any.isRequired,
};

export default Main;
