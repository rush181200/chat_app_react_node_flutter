// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

User _$UserFromJson(Map<String, dynamic> json) => User(
      id: (json['id'] as num).toInt(),
      fullName: json['fullName'] as String,
      username: json['username'] as String,
      password: json['password'] as String,
      gender: json['gender'] as String,
      profilePic: json['profilePic'] as String,
      createdAt: json['createdAt'] as String,
      updatedAt: json['updatedAt'] as String,
    );

Map<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{
      'id': instance.id,
      'fullName': instance.fullName,
      'username': instance.username,
      'password': instance.password,
      'gender': instance.gender,
      'profilePic': instance.profilePic,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
    };
