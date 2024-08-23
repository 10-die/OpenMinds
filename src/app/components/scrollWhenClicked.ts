import React, { useState, useEffect, useRef } from 'react';
import { RefObject } from "react";

export const createClickListener = (targetRef: RefObject<HTMLDivElement>) => {
  return (event: React.MouseEvent<HTMLHeadingElement>) => {
    event.preventDefault();
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
};