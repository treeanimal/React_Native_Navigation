// import React, { useEffect, useLayoutEffect } from "react";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from "@react-navigation/native";
// import Home from "../screen/Home";
// import MyStory from "../screen/MyStory";
// import Find from "../screen/Find";


// const Tabs = createBottomTabNavigator();

// const changeHeader = (route) =>
//     route?.state?.routeNames[route.state.index] || "Home";

// export default ({ navigation, route }) => {
//     // console.log("routeSksdlksdfklsfdkl", route);

//     useLayoutEffect(() => {
//         navigation.setOptions({
//             title: changeHeader(route),
//         })
//     });

//     // useEffect( () => {
//     //     navigation.setOptions({title: route.sate.routeNames[route.state.index]})


//     // });
//     // navigation.setOptions({title: "박수진 바보 멍청이"} );
//     return (
//         <Tabs.Navigator>
//             <Tabs.Screen name="Home" component={Home} />
//             <Tabs.Screen name="나의 이야기" component={MyStory} />
//             <Tabs.Screen name="상담사 찾기" component={Find} />
//         </Tabs.Navigator>
//     )
// }