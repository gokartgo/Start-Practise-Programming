#include<stdio.h>
int main(){
int a[1000],i,j,k,l,min,temp;
    scanf("%d",&i);
for(j=0;j<i;j++)
    scanf("%d",&a[j]);
for(j=0;j<i;j++)
{
    for(k=0;k<i-1;k++)
    {
        if(a[k]>a[k+1])
        {
            temp=a[k];
            a[k]=a[k+1];
            a[k+1]=temp;
        }
    }
}
    if(a[0]==0)
    {
    for(j=1;j<i;j++)
        {
            if(a[j]!=0)
            {
            temp=a[0];
            a[0]=a[j];
            a[j]=temp;
            break;
            }
        }
    }
    for(j=0;j<i;j++)
        printf("%d",a[j]);
}
