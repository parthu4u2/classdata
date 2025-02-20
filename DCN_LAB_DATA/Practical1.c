
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void generateFrames(char *message, int frameLength)
{
    int msgLength = strlen(message);
    int totalFrames = (msgLength + frameLength - 1) / frameLength;
    int lastFrameSize = msgLength % frameLength;

    if (lastFrameSize == 0)
    {
        lastFrameSize = frameLength;
    }

    printf("\n Total number of frames : %d\n", totalFrames);
    printf("Frame length: %d\n\n", frameLength);

    for (int i = 0; i < totalFrames; i++)
    {
        int currentFrameSize=(i==totalFrames-1)?lastFrameSize:frameLength;

        printf("Frame %d: [", i + 1);
        printf("Length: %d ]", currentFrameSize);

        printf("Data :");

        for (int j = 0; j < currentFrameSize && (i * frameLength + j) < msgLength; j++)
        {
        printf("%c",message[i*frameLength+j]);
        }
        printf("\n");
    }
}


int main()
{

    char message[1000] ;
    int frameLength;

    printf("Enter The Message To Be Transmited : ");
    fgets(message, sizeof(message), stdin);
    message[strcspn(message,"\n")]=0;


    printf("Enter The Frame Length :");
    scanf("%d",&frameLength);

    if (frameLength<=0)
    {
        printf("Error:Frame length must be positive\n");
        return 1;
    }

    generateFrames(message,frameLength);
    return 0;

}
 
