import { colors } from '@/styles/global';
import { Text } from 'react-native';

// Fallback simple Icon component to avoid dependency on '@expo/vector-icons'
function Ionicons({ name, size, color }: { name: string; size?: number; color?: string }) {
  // map a few icon names to emojis or simple characters
  const map: Record<string, string> = {
    home: '🏠',
    'add-circle': '➕',
    list: '📋',
  };
  const char = map[name] ?? '🔘';
  return (
    <Text style={{ fontSize: size ?? 20, color: color ?? '#000' }} accessible accessibilityLabel={name}>
      {char}
    </Text>
  );
}
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.surface,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='add-meal'
        options={{
          title: 'Add Meal',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='add-circle' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='meals'
        options={{
          title: 'All Meals',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='list' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
