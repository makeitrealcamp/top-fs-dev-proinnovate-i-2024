import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  candidates: [
    {
      id: 1,
      name: 'Don Julio',
      votes: 0,
      percentage: 0,
    },
    {
      id: 2,
      name: 'Jhonny Walker',
      votes: 0,
      percentage: 0,
    },
    {
      id: 3,
      name: 'Jack Daniels',
      votes: 0,
      percentage: 0,
    },
    {
      id: 4,
      name: 'Jose Cuervo',
      votes: 0,
      percentage: 0,
    },
  ],
  filterType: 'TOTAL',
  showCandidates: 'ALL',
};

export const FILTER_CHANGE = 'FILTER_CHANGE';
export const VOTE = 'VOTE';

// action -> Flux Standard Action (FSA)
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_CHANGE:
      return {
        ...state,
        filterType: payload,
      };
    case VOTE: {
      const totalVotes = state.candidates.reduce(
        (acc, candidate) => acc + candidate.votes,
        1
      );
      return {
        ...state,
        candidates: state.candidates.map((candidate) => {
          if (candidate.id === payload) {
            const votes = candidate.votes + 1;
            return {
              ...candidate,
              votes,
              percentage: (votes / totalVotes) * 100,
            };
          }

          return {
            ...candidate,
            percentage: (candidate.votes / totalVotes) * 100,
          };
        }),
      };
    }
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};
