import { useState } from 'react';
import { GraphQLUnknownObject } from '../types';
import { GraphQLList, GraphQLNonNull } from 'graphql';

export default function useHistory() {
  const [history, setHistory] = useState<GraphQLUnknownObject[]>([]);
  const [currentObject, setCurrentObject] = useState<GraphQLUnknownObject | null>(null);
  const [prevObject, setPrevObject] = useState<GraphQLUnknownObject | null>(null);

  const setHistoryObject = (object: GraphQLUnknownObject): void => {
    if (history.length > 0) {
      setPrevObject(history[history.length - 1]);
    }
    if (object instanceof (GraphQLList || GraphQLNonNull)) {
      return setHistoryObject(object.ofType);
    } else {
      setHistory([...history, object]);
      setCurrentObject(object);
    }
  };

  const goToPrevHistoryObject = () => {
    if (history.length <= 1) {
      setCurrentObject(null);
      setPrevObject(null);
      setHistory([]);
      return;
    }
    if (history.length === 2) {
      setCurrentObject(history[0]);
      setPrevObject(null);
      setHistory([]);
    }
    if (history.length > 2) {
      setPrevObject(history[history.length - 3]);
    } else {
      setPrevObject(null);
    }
    const object = history[history.length - 2];
    setHistory(history.slice(0, history.length - 1));
    setCurrentObject(object);
  };

  const clearHistory = () => {
    setHistory([]);
    setCurrentObject(null);
    setPrevObject(null);
  };

  return {
    setHistoryObject,
    goToPrevHistoryObject,
    clearHistory,
    currentObject,
    prevObject,
  };
}
