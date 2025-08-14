import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre a Flor & Arte</Text>

      <Image
        source={{ uri: "https://images.unsplash.com/photo-1494256997604-768d1f608cade?w=1200&q=80" }}
        style={styles.hero}
      />

      <Text style={styles.paragraph}>
        Fundada em 2010, a Flor & Arte nasceu do sonho de transformar momentos em memórias através das flores.
        Nossa equipe é formada por floristas experientes que trabalham com flores frescas, técnicas sustentáveis e muito carinho.
      </Text>

      <Text style={styles.subTitle}>Nossa Missão</Text>
      <Text style={styles.paragraph}>
        Levar beleza e emoção para o dia a dia, criando arranjos que contem histórias e aproximem pessoas.
      </Text>

      <Text style={styles.subTitle}>Equipe</Text>
      <View style={styles.team}>
        <View style={styles.member}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" }} style={styles.avatar} />
          <Text style={styles.memberName}>Mariana — Fundadora / Florista chefe</Text>
        </View>
        <View style={styles.member}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1545996124-9f8f5f4fd3d1?w=800&q=80" }} style={styles.avatar} />
          <Text style={styles.memberName}>Carlos — Designer floral</Text>
        </View>
      </View>

      <Text style={styles.subTitle}>Valores</Text>
      <Text style={styles.paragraph}>
        Sustentabilidade, qualidade, atendimento humano e criatividade são o coração do que fazemos.
      </Text>

      <Link href="/" asChild>
        <View style={styles.backBtn}>
          <Text style={styles.backText}>Voltar à Página Inicial</Text>
        </View>
      </Link>

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "800", color: "#2f5a3f", marginBottom: 12, textAlign: "center" },
  hero: { width: "100%", height: 180, borderRadius: 12, marginBottom: 12 },
  paragraph: { color: "#444", lineHeight: 20, marginBottom: 12 },
  subTitle: { fontSize: 16, fontWeight: "700", color: "#355a3a", marginTop: 8, marginBottom: 6 },

  team: { flexDirection: "row", gap: 12 },
  member: { flex: 1, alignItems: "center", backgroundColor: "#fafaf8", padding: 10, borderRadius: 8 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 8 },
  memberName: { textAlign: "center", fontWeight: "600", color: "#2f4a36" },

  backBtn: { marginTop: 18, backgroundColor: "#3b6b4a", paddingVertical: 12, borderRadius: 8, alignItems: "center" },
  backText: { color: "#fff", fontWeight: "700" }
});