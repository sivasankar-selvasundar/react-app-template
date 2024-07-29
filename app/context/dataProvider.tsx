"use client";
import React, { useState, ReactNode, useCallback, FC } from "react";
import { DataContext, DataType } from "./dataContext";

const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  
  const [contextData, setContextData] = useState<DataType>({
    properties: new Map<string, any>(),
    loading: true
  } as DataType);


  const globalFunctions = new Map<string, Function>();

  globalFunctions.set("updateProperty", 
    useCallback((key: string, propertyName: string, value: any) => {
      setContextData((_oldData: DataType) => {
        _oldData.properties.set(key, {
          ..._oldData.properties.get(key),
          [propertyName]: value
        });
        return { ..._oldData };
      });
    }, [])
  )

  const addProperty = useCallback((key: string, value: any) => {
    setContextData((_oldData: DataType) => {
      _oldData.properties.set(key, value);
      return { ..._oldData };
    });
  }, []);

  const loadInitialData = useCallback(
    (
      properties: Map<string, any>
    ) => {
      setContextData((_oldData) => ({
        ..._oldData,
        loading: false,
        properties: properties,
      }));

    },
    []
  );

  return (
    <DataContext.Provider
      value={{
        contextData,
        addProperty,
        loadInitialData,
        globalFunctions
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider };
