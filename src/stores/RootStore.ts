import { makeAutoObservable } from 'mobx';
import TaskStore from './TaskStore';

class RootStore {
  taskStore = new TaskStore();

  constructor() {
    makeAutoObservable(this);
  };
};

export default RootStore;