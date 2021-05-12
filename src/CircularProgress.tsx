import React from 'react';
import GradientCircularProgress, { GradientCircularProgressProps } from './GradientCircularProgress';

interface CircularProgressProps extends Omit<GradientCircularProgressProps, 'startColor' | 'middleColor' | 'endColor'> {
  color: string;
}

const CircularProgress: React.FunctionComponent<CircularProgressProps> = ({
  color,
  ...props
}) => (
    <GradientCircularProgress
      {...props}
      startColor={color}
      middleColor={color}
      endColor={color}
    />
  );

export default CircularProgress;
