import packageJson from '../../package.json';

export class AppInfoUseCase {
	execute() {
		const { name, version } = packageJson;

		return { name, version };
	}
}
