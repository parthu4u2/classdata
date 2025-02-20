 #include<stdio.h>
#include<string.h>


int main(){
	char data[100],stuffedData[200];
	int i,count=0,j=0;

	printf("Enter The Data :- ");
	scanf("%s",data);

	for(i=0;i<strlen(data);i++)
	{
		if(data[i]=='1'){
			count++;
			stuffedData[j++]=data[i];
		}else{
			count=0;
			stuffedData[j++]=data[i];
		}

		if(count==5)
		{
			count=0;
			stuffedData[j++]='0';
		}
	}

	stuffedData[j]='\0';
	printf("Data after hit stuffing :- %s\n",stuffedData);
	return 0;
}
