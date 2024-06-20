import 'package:chat_app/pages/check.dart';
import 'package:chat_app/pages/home/home.dart';
import 'package:chat_app/pages/login/login.dart';
import 'package:chat_app/pages/signup/signup.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: CheckUserLogin(),
    );
  }
}
