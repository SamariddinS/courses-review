import { ConfigService } from '@nestjs/config/dist';
import { TypegooseModuleOptions } from 'nestjs-typegoose/dist/typegoose-options.interface';

export const getMongoConfig = async (
	configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(configService),
		...getMongoOptions(),
	};
};

const getMongoString = (configService: ConfigService) =>
	'mongodb+srv://' +
	configService.get('MONGO_USER') +
	':' +
	configService.get('MONGO_PASSWORD') +
	'@' +
	configService.get('MONGO_HOST') +
	'/' +
	configService.get('MONGO_DATABASE') +
	'?retryWrites=true&w=majority';

const getMongoOptions = () => ({
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
