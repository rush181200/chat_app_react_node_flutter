import 'package:chat_app/api/ApiService.dart';
import 'package:chat_app/models/user.dart';
import 'package:flutter/foundation.dart';

class UserProvider with ChangeNotifier {
  final ApiService apiService;
  // List<User> _users = [];
  // bool _isLoading = false;

  UserProvider({required this.apiService});

  // List<User> get users => _users;
  // bool get isLoading => _isLoading;

  // Future<void> fetchUsers() async {
  //   _isLoading = true;
  //   notifyListeners();

  //   try {
  //     _users = await apiService.fetchUsers();
  //   } catch (error) {
  //     print('Error fetching users: $error');
  //   } finally {
  //     _isLoading = false;
  //     notifyListeners();
  //   }
  // }
}
