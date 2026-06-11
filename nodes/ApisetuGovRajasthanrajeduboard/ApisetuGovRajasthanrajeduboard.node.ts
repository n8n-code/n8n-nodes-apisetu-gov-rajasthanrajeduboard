import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovRajasthanrajeduboard implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Rajasthanrajeduboard',
		name: 'N8nDevApisetuGovRajasthanrajeduboard',
		icon: { light: 'file:./apisetu-gov-rajasthanrajeduboard.svg', dark: 'file:./apisetu-gov-rajasthanrajeduboard.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Rajasthan Board Class X (2018-19) & XII (2019) mark sheets available on DigiLocker.',
		defaults: { name: 'Apisetu Gov Rajasthanrajeduboard' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovRajasthanrajeduboardApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
