
import React from 'react'
import { Heart, Home2, SearchNormal, User } from 'iconsax-react-native'
import { FAVORITE, HOME, PROFILE, SEARCH } from '../../utils/routes'

interface TabIconProps {
  name: string;
  focused: boolean;
  color: string;
  size: number;
}

const TabIcon: React.FC<TabIconProps> = ({ name, focused, color, size }) => {
  switch (name) {
    case HOME:
      return <Home2 color={color} variant={focused ? "Bold" : "Outline"} size={size} />;
    case SEARCH:
      return <SearchNormal color={color} variant={focused ? "Bold" : "Outline"} size={size} />;
    case FAVORITE:
      return <Heart color={color} variant={focused ? "Bold" : "Outline"} size={size} />;
    case PROFILE:
      return <User color={color} variant={focused ? "Bold" : "Outline"} size={size} />;
    default:
      return null;  
  }
}

export default TabIcon;
