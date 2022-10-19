#include <GLFW/glfw3.h>
#define GLFW_INCLUDE_NONE
#include <glad/glad.h>
#include <iostream>

int main() {

	glfwInit();

	GLFWwindow* window = glfwCreateWindow(640, 480, "My Title", NULL, NULL);
	if (!window)
	{
		std::cout << "Window creation failed";
	}

	glfwDestroyWindow(window);
	glfwTerminate();
	return 0;
}
