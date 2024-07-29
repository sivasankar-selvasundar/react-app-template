'use client'
import {createContext} from 'react';

export interface DataType {
  properties: Map<string, any>
}

export interface DataContextType {
  contextData: DataType,
  addProperty: (key: string, value: any) => void;
  loadInitialData: (properties: Map<string, any>) => void;
  globalFunctions: Map<string, Function>;
}

const DataContext = createContext<DataContextType>({
  contextData: {} as DataType,
  addProperty: (key: string, value: any) => {},
  loadInitialData: (properties: Map<string, any>) => {},
  globalFunctions: new Map<string, Function>()
});

export { DataContext };
