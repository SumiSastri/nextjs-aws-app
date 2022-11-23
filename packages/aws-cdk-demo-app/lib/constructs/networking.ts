// no need to import the cdk or install the ec2 package in V2
import { aws_ec2 as ec2} from 'aws-cdk-lib';
import { IpAddresses } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

interface NetworkingProps {
    // maximum number of availability zones
    maxAzs: number;
}

export class Networking extends Construct {

    public readonly vpc:ec2.IVpc;

    constructor(scope: Construct, id: string, props: NetworkingProps) {
        super(scope, id);

        new ec2.Vpc(this, 'AWSCDKDemoVPC', {
            ipAddresses: IpAddresses.cidr('10.0.0.0/16'),
            maxAzs: props.maxAzs,
            // maxAzs:2 -> using props means you can set the number dynamically when used elsewhere in code
            subnetConfiguration: [
               {
                 cidrMask: 24,
                 name: 'AWSCDKDemoPublic',
                 subnetType: ec2.SubnetType.PUBLIC,
               },
            ]
         });

    }
}