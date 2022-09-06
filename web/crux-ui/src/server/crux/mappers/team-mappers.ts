import { User, UserRole, UserStatus } from '@app/models'
import {
  UserResponse,
  UserRole as ProtoUserRole,
  userRoleFromJSON,
  userRoleToJSON,
  UserStatus as ProtoUserStatus,
  userStatusToJSON,
} from '@app/models/grpc/protobuf/proto/crux'

export const userStatusToDto = (status: ProtoUserStatus): UserStatus =>
  userStatusToJSON(status).toLocaleLowerCase() as UserStatus

export const userRoleToDto = (role: ProtoUserRole): UserRole => userRoleToJSON(role).toLocaleLowerCase() as UserRole

export const userToDto = (user: UserResponse): User => ({
  ...user,
  status: userStatusToDto(user.status),
  role: userRoleToDto(user.role),
})

export const userRoleToGrpc = (role: UserRole): ProtoUserRole => userRoleFromJSON(role.toUpperCase()) as ProtoUserRole
