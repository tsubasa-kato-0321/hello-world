// $ g++ hello-cgi.c++ -o hello-cgi-c++.cgi -Wall

#include <iostream>

auto main() -> int
{
    std::cout << "Content-type: text/html" << std::endl
              << std::endl
              << "Hello, CGI by C++." << std::endl;
}
