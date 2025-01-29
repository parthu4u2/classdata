#include <stdio.h> 
#include <stdlib.h> 
#include <unistd.h>
#include <string.h> 
int main() 
{
 int pipefd[2];
 char buffer[20];
 const char *message = "Hello"; 
if (pipe(pipefd) == -1) 
{
 perror("pipe"); 
exit(EXIT_FAILURE); 
}
 printf("Writing message to pipe...\n"); 
write(pipefd[1], message, strlen(message) + 1); 
printf("Reading message from pipe...\n"); 
read(pipefd[0], buffer, sizeof(buffer));
 printf("Received message: %s\n", buffer); 
close(pipefd[0]); 
close(pipefd[1]);
 return 0; 
}
