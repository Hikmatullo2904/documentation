# Class Documentation

## Class: PaymentFile

- **name**: `STRING`
- **date**: `DATE`

## Class: Order

**Description:**   Bu order class

- **user**: `ProjectUser`
  -  this is test description for user_id in order
- **product**: `Product`
- **date**: `DATE`
- **orderStatus**: `OrderStatus`
- **paymentStatus**: `PaymentStatus`
- **paymentType**: `PaymentType`

## Class: ProjectUser extends CustomUser

- **firstname**: `STRING`
- **lastname**: `STRING`
- **email**: `STRING`
- **password**: `STRING`
- **role**: `Role`
- **newField**: `STRING`
  -  this is test for column anno
- **anotherField**: `STRING`
  -  this is multi line test for column anno

## Class: Comment

- **rank**: `INTEGER`
- **comment**: `TEXT`
  -  this is comment for docs
- **product**: `Product`
- **user**: `ProjectUser`
- **date**: `DATE`

## Class: Payment

- **pinfl**: `STRING`
- **date**: `DATE`
- **sum**: `LONG`
- **paymentFile**: `PaymentFile`
- **employee**: `Employee`

## Class: Employee

- **ggg**: `STRING`
- **name**: `STRING`
- **pinfl**: `STRING`

## Class: Test

- **name**: `STRING`
  -  wwww
- **age**: `INTEGER`
  -  wds sdsd
- **gender**: `STRING[5]`
- **address**: `STRING`
- **phoneNumber**: `BPISTRING`

## Class: Picture

**Description:**  this is Picture class. picture url is saved in db, picture is saved in files

- **url**: `STRING`

## Class: FavoriteProducts

- **product**: `Product`
- **user**: `ProjectUser`

## Class: Example extends Test


### Parent Class Properties
- **name**: `STRING`
  -  wwww
- **age**: `INTEGER`
  -  wds sdsd
- **gender**: `STRING[5]`
- **address**: `STRING`
- **phoneNumber**: `BPISTRING`

## Class: Product

**Description:**  this is test  Keyingi qator ham ko'rstayapti Nima uchun

- **name**: `STRING`
- **description**: `STRING`
  -  this is test
- **price**: `LONG`
- **amount**: `INTEGER`
- **picture**: `Picture`

## Class: RegisterUser

- **firstname**: `STRING`
- **lastname**: `STRING`
- **email**: `STRING`
- **password**: `STRING`
- **code**: `INTEGER`
- **role**: `Role`
- **expiredAt**: `DATETIME`

## Enums

### Enum: DFS


### Enum: Role

- `ADMIN`
- `USER`

### Enum: OrderStatus

**Description:**  something

- `NEW_`
- `PACKAGING`
- `DELIVERING`
- `DELIVERED`
- `CANCELLED`

### Enum: D

**Description:**  this is hhh

- `B`
- `W`
- `FG`

### Enum: PaymentType

- `CASH`
- `CARD`

### Enum: PaymentStatus

- `PAID`
- `NOT_PAID`

