/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import './global.css';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View className="flex-1 bg-gray-100 dark:bg-gray-900">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <ScrollView className="flex-1 px-4 pt-12">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Lifting App
          </Text>
          <Text className="text-gray-600 dark:text-gray-300">
            Built with React Native + Tailwind CSS
          </Text>
        </View>

        {/* Feature Cards */}
        <View className="space-y-4">
          <View className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              🏋️ Workout Tracking
            </Text>
            <Text className="text-gray-600 dark:text-gray-300 mb-4">
              Track your lifts, sets, and reps with ease
            </Text>
            <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
              <Text className="text-white font-medium text-center">Get Started</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              📊 Progress Analytics
            </Text>
            <Text className="text-gray-600 dark:text-gray-300 mb-4">
              Visualize your strength gains over time
            </Text>
            <TouchableOpacity className="bg-green-500 px-4 py-2 rounded-lg">
              <Text className="text-white font-medium text-center">View Progress</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <Text className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              🎯 Goal Setting
            </Text>
            <Text className="text-gray-600 dark:text-gray-300 mb-4">
              Set and achieve your fitness goals
            </Text>
            <TouchableOpacity className="bg-purple-500 px-4 py-2 rounded-lg">
              <Text className="text-white font-medium text-center">Set Goals</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View className="mt-8 pb-8">
          <Text className="text-center text-gray-500 dark:text-gray-400">
            Powered by React Native 0.80.1 + NativeWind
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
