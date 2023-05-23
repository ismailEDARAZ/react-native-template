import React from 'react'
import { Button, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingPage() {
    const Done = ({ isLight, ...props }) => (
        <Button
          title={'Done'}
          buttonStyle={{
            backgroundColor: "#fff",
          }}
          containerViewStyle={{
            marginVertical: 10,
            width: 70,
            backgroundColor: "#fff",
          }}
          textStyle={{ color: "#000" }}
          {...props}
        />
    );
      
    const Skip = ({ isLight, skipLabel, ...props }) => (
        <Button
          title={'Skip'}
          buttonStyle={{
            backgroundColor: "#fff",
          }}
          containerViewStyle={{
            marginVertical: 10,
            width: 70,
          }}
          textStyle={{ color: "#000" }}
          {...props}
        >
          {skipLabel}
        </Button>
    );

    const Next = ({ isLight, ...props }) => (
        <Button
          title={'Next'}
          buttonStyle={{
            backgroundColor: "#fff",
          }}
          containerViewStyle={{
            marginVertical: 10,
            width: 70,
            backgroundColor: "#fff",
          }}
          textStyle={{ color: "#000" }}
          {...props}
        />
    );

  return (
    <Onboarding
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        DoneButtonComponent={Done}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../../assets/images/circle.png')} style={{width: 200, height: 200}} />,
                title: 'Onboarding 1',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../../assets/images/circle.png')} style={{width: 200, height: 200}} />,
                title: 'Onboarding 2',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
        ]}
    />
  )
}