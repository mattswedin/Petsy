json.extract! @user, :username, :email, :id, :current_order
json.partial! "api/users/user", user: @user