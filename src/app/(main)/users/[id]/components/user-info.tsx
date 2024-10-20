"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import UserAvatar from "@/components/user-avatar";
import { useState } from "react";

export default function UserInfo() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionate about technology and trading cool gadgets!",
    avatar: "/placeholder.svg?height=128&width=128",
  });
  const [isEditing, setIsEditing] = useState(false);

  const onEditProfile = () => {
    setIsEditing(true);
  };

  const onSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically send the updated user data to your backend
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <UserAvatar
              img={require("@/assets/imgs/demo.jpg")}
              name={user.name}
              className="h-20 w-20"
            />
            <div>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </div>
          </div>
          <Button onClick={isEditing ? onSaveProfile : onEditProfile}>
            {isEditing ? "Save Profile" : "Edit Profile"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={user.bio}
                onChange={(e) => setUser({ ...user, bio: e.target.value })}
              />
            </div>
          </div>
        ) : (
          <p>{user.bio}</p>
        )}
      </CardContent>
    </Card>
  );
}
