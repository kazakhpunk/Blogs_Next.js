# Blogs Catalogue
Made by Nursultan Sagyntay.

Welcoome to the Blogs Catalogue, a web application that provides information on specific blogs fetched from JSON file.

The project is made using Next.js

## Main Features

- **Blogs**: Users can see Blogs info from JSON file.

## Installation

```console
git clone git@github.com:kazakhpunk/Star-Wars.git
```

>OR

```console
git clone https://github.com/kazakhpunk/Star-Wars.git
```

```console
npm install
npm run dev
```
## Common Issue: Port already in use

- **Solution**:
```console
lsof -i :<number_of_port>
kill -9 <PID>
```