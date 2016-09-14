node {	
	env.PATH = "${tool 'sonarqube-scanner-2.7'}/bin:${env.PATH}"
	env.PATH = "${tool 'nodejs-6.5.0'}/bin:${env.PATH}"
	
	stage('Checkout') {
	    checkout scm
	    def v = version(readFile('bower.json'))
		if (v) {
		  echo "Building version ${v}"
		}
	}
    
    stage('Build') {
    	sh "npm install"
    	sh "bower install"
    }
    
    stage('Unit-Tests') {
	    sh "grunt test"
    }
    
    stage('Integration-Tests') {
	    sh "echo no integration tests for the moment"
	
	    step([
	            $class     : 'ArtifactArchiver',
	            artifacts  : '**/dist/*.zip',
	            fingerprint: true
	    ])
    }
	
	stage('Code Analysis') {
		sh 'sonar-scanner'
	}
	
	stage('Deploy') {
		sh 'grunt build'
		sh 'cp dist/*.zip docker/'
		dir('docker') {
			echo "Creating docker image"
			sh 'sudo docker build -t project-home-generator-ui .'
			sh 'rm -f *.zip'
		}
	}
	
}
@NonCPS
def version(text) {
  def matcher = text =~ '"version": "(.+)"'
  matcher ? matcher[0][1] : null
}

	