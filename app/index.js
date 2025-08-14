import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  const gallery = [
    { uri: "https://hmjardins.com.br/tok/wp-content/uploads/2015/06/Gard%C3%AAnia.jpg", title: "Gardênia" },
    { uri: "https://realfloresatelie.com.br/wp-content/uploads/2022/01/buque-de-rosas-line.jpg", title: "Rosas Vermelhas" },
    { uri: "https://segredosdavovo.com.br/wp-content/uploads/2014/04/segredos-da-vovo-arranjococo.jpg", title: "Arranjo Tropical" },
    { uri: "https://www.floresonline.com.br/media/catalog/product/a/l/alta-2613-2.jpg", title: "Buquê Primavera" },
    { uri: "https://lojahusqvarna.pt/files/sites/2/2020/12/flores-cravos.jpg", title: "Cravos de Rosas" },
    { uri: "https://cdn.awsli.com.br/496/496853/produto/39110854/camellia-kramer4-6hlwe79igk.jpg", title: "Camélia" },
    { uri: "https://blog.cobasi.com.br/wp-content/uploads/2021/05/lavender-1117275_1920-1.png", title: "Lavandas" },
    { uri: "https://vasoeflor.cdn.magazord.com.br/img/2023/10/produto/1946/azaleia1.jpg?ims=fit-in/800x800/filters:fill(white)", title: "Azaleias" }
  ];

  return (
    <ScrollView contentContainerStyle={styles.scroll} style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.logo}>Flor & Arte 🌸</Text>
        <Text style={styles.subtitle}>Floricultura artesanal — entrega rápida e arranjos personalizados</Text>
      </View>

      <View style={styles.galleryWrap}>
        <Text style={styles.sectionTitle}>Nossa Galeria</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
          {gallery.map((img, i) => (
            <View key={i} style={styles.card}>
              <Image source={{ uri: img.uri }} style={styles.image} />
              <Text style={styles.imageLabel}>{img.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.info}>
        <Text style={styles.sectionTitle}>Sobre nossos produtos</Text>
        <Text style={styles.paragraph}>
          Na Flor & Arte cultivamos relações: cada buquê é confeccionado à mão com flores frescas selecionadas por nossos floristas.
          Trabalhamos com espécies sazonais, arranjos para eventos, cestas e assinaturas mensais.
        </Text>

        <Text style={styles.sectionTitle}>Serviços</Text>
        <Text style={styles.paragraph}>
          • Entrega no mesmo dia em bairros centrais (pedido até 15h).{"\n"}
          • Montagem para casamentos e eventos corporativos.{"\n"}
          • Consultoria para decoração floral.
        </Text>

        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.paragraph}>Telefone: (11) 99999-9999{"\n"}Email: contato@florearte.com.br</Text>

        <View style={styles.actions}>
          <Link href="/sobre" asChild>
            <TouchableOpacity style={styles.btnPrimary}>
              <Text style={styles.btnText}>Conheça nossa história</Text>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity
            style={styles.btnOutline}
            onPress={() => Linking.openURL("tel:+551199999999")}
          >
            <Text style={styles.btnOutlineText}>Ligar agora</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Endereço: Rua das Flores, 123 — Centro</Text>
        <Text style={styles.footerNote}>Aberto: Seg-Sex 08:00–18:00 · Sáb 09:00–14:00</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#fff" },
  scroll: { padding: 20, paddingBottom: 40 },
  header: { alignItems: "center", marginBottom: 16 },
  logo: { fontSize: 26, fontWeight: "700", color: "#3b6b4a" },
  subtitle: { marginTop: 6, textAlign: "center", color: "#556b58" },

  galleryWrap: { marginTop: 8 },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: "#355a3a", marginBottom: 8 },
  gallery: { paddingVertical: 6 },
  card: { marginRight: 12, width: 220, borderRadius: 10, overflow: "hidden", backgroundColor: "#fafafa", elevation: 2 },
  image: { width: "100%", height: 140, resizeMode: "cover" },
  imageLabel: { padding: 8, fontWeight: "600", color: "#2f4a36" },

  info: { marginTop: 16 },
  paragraph: { color: "#444", lineHeight: 20, marginBottom: 12 },

  actions: { flexDirection: "row", gap: 12, justifyContent: "space-between" },
  btnPrimary: { backgroundColor: "#3b6b4a", paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8, flex: 1, alignItems: "center", marginRight: 8 },
  btnText: { color: "#fff", fontWeight: "700" },
  btnOutline: { borderColor: "#3b6b4a", borderWidth: 1, paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8, alignItems: "center", flex: 1 },
  btnOutlineText: { color: "#3b6b4a", fontWeight: "700" },

  footer: { marginTop: 20, alignItems: "center", paddingTop: 12, borderTopWidth: 1, borderTopColor: "#eee" },
  footerText: { color: "#666" },
  footerNote: { color: "#9a9a9a", fontSize: 12, marginTop: 4 }
});