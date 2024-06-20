import 'package:chat_app/pages/home/home.dart';
import 'package:chat_app/pages/login/login.dart';
import 'package:flutter/material.dart';

class CheckUserLogin extends StatefulWidget {
  const CheckUserLogin({super.key});

  @override
  State<CheckUserLogin> createState() => _CheckUserLoginState();
}

class _CheckUserLoginState extends State<CheckUserLogin> {
  bool isUserlogin = false;
  @override
  Widget build(BuildContext context) {
    return isUserlogin ? Home() : LoginPage();
  }
}
