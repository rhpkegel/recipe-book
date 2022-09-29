package org.recipebook

import org.h2.tools.Server
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.sql.SQLException

@Configuration
class H2ConfigBean {
    @Bean(initMethod = "start", destroyMethod = "stop")
    @Throws(SQLException::class)
    fun inMemoryH2DatabaseServer(): Server? {
        return Server.createTcpServer(
            "-tcp", "-tcpAllowOthers", "-tcpPort", "9090"
        )
    }
}