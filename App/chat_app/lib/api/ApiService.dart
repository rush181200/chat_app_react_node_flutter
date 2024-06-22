import 'dart:convert';
import 'package:chat_app/models/user.dart';
import 'package:http/http.dart' as http;

class ApiService {
  final String baseUrl;

  ApiService({required this.baseUrl});

  Future<List<User>> SignUpUsers() async {
    final response = await http.post(Uri.parse('$baseUrl/api/auth/login'));

    if (response.statusCode == 200) {
      List<dynamic> data = jsonDecode(response.body);
      return data.map((userJson) => User.fromJson(userJson)).toList();
    } else {
      throw Exception('Failed to load users');
    }
  }
}
