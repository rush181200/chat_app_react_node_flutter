import 'package:json_annotation/json_annotation.dart';

part 'user.g.dart';

@JsonSerializable()
class User {
  final int id;
  final String fullName;
  final String username;
  final String password;
  final String gender;
  final String profilePic;
  final String createdAt;
  final String updatedAt;

  User(
      {required this.id,
      required this.fullName,
      required this.username,
      required this.password,
      required this.gender,
      required this.profilePic,
      required this.createdAt,
      required this.updatedAt});

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);

  Map<String, dynamic> toJson() => _$UserToJson(this);
}
